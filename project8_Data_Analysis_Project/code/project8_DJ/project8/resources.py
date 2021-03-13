from import_export import resources
from .models import Teacher


class DataResource(resources.ModelResource):
    class meta:
        model = Teacher
