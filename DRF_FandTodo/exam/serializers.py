from .models import Country, Customer
from rest_framework.serializers import ModelSerializer, Serializer


class CountrySerializer(ModelSerializer):
        class Meta:
            model = Country
            fields = '__all__'


class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'