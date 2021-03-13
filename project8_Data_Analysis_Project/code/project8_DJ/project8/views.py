from django.shortcuts import render,redirect
from django.db.models import Count


from .models import Teacher, DataSet, DataSource
from project8.resources import DataResource

import os
from tablib import Dataset
from datetime import datetime
import time

from django.contrib.auth.decorators import login_required


# Pages 
@login_required(login_url='admin/login')
def index(request):
    posts   = Teacher.objects.all().values('speciality').annotate(total=Count('speciality')).order_by('total')
    gender  = Teacher.objects.all().values('gender').annotate(total=Count('degree')).order_by('total')
    degree = Teacher.objects.all().values('degree').annotate(total=Count('address')).order_by('total')
    source  = DataSource.objects.all().values('name_data_source').annotate(total=Count('name_data_source')).order_by('total')
    context = {
        'data': posts,
        'gender' : gender,
        'degree': degree,
        'source' : source
    }
    return render(request, 'pages/index.html', context)

@login_required(login_url='admin/login')
def invoice(request):
    return render(request,'pages/invoice.html')
@login_required(login_url='admin/login')
def projects(request):
    return render(request,'pages/projects.html')

@login_required(login_url='admin/login')
def tables(request):
    teachers = Teacher.objects.all()
    return render(request,"pages/tables.html",
    {'teachers':teachers})  


def testdata(request):
    posts = Teacher.objects.all().values('speciality').annotate(total=Count('speciality')).order_by('total')
    context = {
        'data': posts,
    }
    return render(request, 'project8/index.html', context)


#End  Pages 

## functions

def csvFile(file, option):
    resource_teacher = DataResource()
    dataset = Dataset()
    imported_data = dataset.load(file.read(), 'csv')
    result = resource_teacher.import_data(dataset, dry_run=False)
    Teacher.objects.filter(source_id_isnull=True).update(source_id=option)


def xlsxFile(file, option):
    resource_teacher = DataResource()
    dataset = Dataset()
    imported_data = dataset.load(file.read(), 'xlsx')
    result = resource_teacher.import_data(dataset, dry_run=False)
    Teacher.objects.filter(source_id_isnull=True).update(source_id=option)


## upload data sets
@login_required(login_url='admin/login')
def import_data(request):
    error = ''
    datasource = DataSource.objects.all()
    # print(request.FILES['file'])

    if request.method == 'POST':
        file = request.FILES['file']
        option = request.POST['option']

        start_time = time.time()

        dataset_module = DataSet()
        dataset_module.date = datetime.today().strftime('%Y-%m-%d')
        dataset_module.file_name = file.name
        dataset_module.execution_time = start_time
        dataset_module.num_of_records = file.size
        dataset_module.source_id = option
        dataset_module.save()
        last_id = DataSet.objects.last()



        if request.FILES['file'].name.split('.')[1] == 'xlsx':
            resource_teacher = DataResource()
            dataset = Dataset()
            file = request.FILES['file']
            imported_data = dataset.load(file.read(), format='xlsx')

            for col in imported_data:
                if col[1] is None:
                    return redirect('/tables')
                value = Teacher(
                    col[0],
                    col[1],
                    col[2],
                    col[3],
                    col[4],
                    col[5],
                    col[6],
                    col[7],
                    col[8],
                    col[9],
                    last_id.id

                )
                value.save()
            result = resource_teacher.import_data(dataset, dry_run=False)
            Teacher.objects.filter(dataset_id__isnull=True).update(dataset_id=option)
            if not result.has_errors():
                resource_teacher.import_data(dataset, dry_run=False)  # Actually import now

        elif request.FILES['file'].name.split('.')[1] == 'csv':
            resource_teacher = DataResource()
            dataset = Dataset()
            file = request.FILES['file']
            imported_data = dataset.load(file.read(), format='csv')
            record_num = 0

            for col in imported_data:
                record_num+=1
                if col[1] is None:
                    return redirect('/')
                value = Teacher(
                    col[0],
                    col[1],
                    col[2],
                    col[3],
                    col[4],
                    col[5],
                    col[6],
                    col[7],
                    col[8],
                    col[9],
                    last_id.id

                )
                value.save()

            result = resource_teacher.import_data(dataset, dry_run=False)
            Teacher.objects.filter(dataset_id__isnull=True).update(dataset_id=option)
            if not result.has_errors():
                resource_teacher.import_data(dataset, dry_run=False)  # A
        else:
            error = 'Invalid input, Pleases make sure to put either CSV or XLSX'
    return render(request, 'pages/form_upload.html', {'datasource': datasource, 'error': error})


def search(request):
    searchString=request.POST['search_string']
    list_obj=[]
    people = Teacher.objects.raw("SELECT * FROM project8_teacher WHERE NID like %{"+ searchString +"}% || full_name like '%{searchString}%'|| address like '%{searchString}%'|| subject like '%{string}%'")
    for p in people:
        list_obj.append(p)
    return  render(request, 'pages/tables.html', {'list_obj': list_obj,'isSearch':True})

# Create your views here.
