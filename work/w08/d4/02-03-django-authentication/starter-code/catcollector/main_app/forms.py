from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Feeding
from django.contrib.auth.models import User

ModelForm = forms.ModelForm


class FeedingForm(ModelForm):
    class Meta:
        model = Feeding
        fields = ['date', 'meal']


class FullUserForm(UserCreationForm):
    first_name = forms.CharField(max_length=40)
    first_name = forms.CharField(max_length=40)
    email = forms.EmailField(max_length=75)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
