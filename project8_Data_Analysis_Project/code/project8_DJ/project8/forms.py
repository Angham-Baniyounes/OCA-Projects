from django import forms
from .models import DataChart


class CountryDataForm(forms.ModelForm):
    class Meta:
        model = DataChart
        fields = '__all__'