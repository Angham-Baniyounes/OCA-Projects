from django.db import models
# Create your models here.

class Admins(models.Model):
    name     = models.CharField(max_length=100)
    email    = models.EmailField()
    password = models.CharField(max_length=100)

    class Meta:
        db_table = "admins"

# new data for relations
class DataSource(models.Model):
    name_data_source = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name_data_source
        

class DataSet(models.Model):
    date           = models.DateTimeField(auto_now_add=True)
    source         = models.ForeignKey('DataSource', on_delete=models.CASCADE)
    file_name      = models.CharField(max_length=100)
    execution_time = models.FloatField(default=0)
    num_of_records = models.IntegerField(default=0)
    def __str__(self):
        return f'{self.file_name} / {self.source}'

class Teacher(models.Model):
    NID        = models.BigIntegerField(null=True)
    full_name  = models.CharField(max_length=100, null=True)
    gender     = models.CharField(max_length=100, null=True)
    degree     = models.CharField(max_length=100, null=True)
    speciality = models.CharField(max_length=100, null=True)
    subject    = models.CharField(max_length=100, null=True)
    address    = models.CharField(max_length=100, null=True)
    city       = models.CharField(max_length=100, null=True)
    test_state = models.CharField(max_length=100, null=True)
    dataset    = models.ForeignKey('DataSet', on_delete = models.CASCADE, null=True)
    def __str__(self):
        return f'{self.full_name} - {self.speciality} - {self.address}'