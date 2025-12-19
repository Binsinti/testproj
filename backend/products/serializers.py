from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer for Product model with proper field mapping
    """
    _id = serializers.IntegerField(source='id', read_only=True)
    countInStock = serializers.IntegerField(source='count_in_stock')

    class Meta:
        model = Product
        fields = [
            '_id',
            'name',
            'image',
            'description',
            'brand',
            'category',
            'price',
            'rating',
            'countInStock',
        ]
