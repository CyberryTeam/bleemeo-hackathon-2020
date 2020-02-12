from django.shortcuts import render, redirect

from core.forms import AttendeeForm
from core.models import Attendee


def index(request):
    attendees = Attendee.objects.all()
    form = AttendeeForm()

    context = {"attendees": attendees, "form": form}

    return render(request, "core/index.html", context)

def cake(request):
    attendees = Attendee.objects.all()


def add(request):
    form = AttendeeForm(request.POST)

    if form.is_valid():
        Attendee(name=request.POST["name"]).save()

    return redirect("index")


def delete(request, attendee_id):
    Attendee.objects.get(pk=attendee_id).delete()

    return redirect("index")
