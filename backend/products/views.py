from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer


@api_view(['GET'])
def get_routes(request):
    """
    API Routes endpoint - returns list of all available endpoints
    """
    routes = [
        {
            'endpoint': '/api/products/',
            'method': 'GET',
            'description': 'Returns list of all products'
        },
        {
            'endpoint': '/api/products/<id>/',
            'method': 'GET',
            'description': 'Returns a single product by ID'
        },
        {
            'endpoint': '/api/routes/',
            'method': 'GET',
            'description': 'Returns list of all available API endpoints'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def get_products(request):
    """
    List View - returns all products
    """
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, pk):
    """
    Detail View - returns a single product by ID
    """
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response(
            {'detail': 'Product not found'},
            status=status.HTTP_404_NOT_FOUND
        )

