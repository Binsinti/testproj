from django.db import models


class Product(models.Model):
    """
    Product model for Zaopin gaming mice and accessories
    """
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=500, help_text="Image URL or path")
    description = models.TextField()
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    count_in_stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']

