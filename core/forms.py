from django import forms

from core.models import Attendee


class AttendeeForm(forms.ModelForm):
    class Meta:
        model = Attendee
        fields = ["name"]
        widgets = {
            "name": forms.TextInput()
        }
