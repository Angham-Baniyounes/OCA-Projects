from django.contrib import admin

# Register your models here.

from .models import Teacher
from .models import DataSet
from .models import DataSource
from import_export.admin import ImportExportModelAdmin


@admin.register(Teacher)
class ProfileImportExport(ImportExportModelAdmin):
    pass

@admin.register(DataSet)
class DataSetAdmin(admin.ModelAdmin):
    pass

@admin.register(DataSource)
class DataSourceAdmin(admin.ModelAdmin):
    pass