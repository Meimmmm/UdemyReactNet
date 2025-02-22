using System;

namespace API.Entities;

public class Basket
{
    public int id { get; set; }
    public required string BasketId { get; set; }
    public List<BasketItem> Items { get; set; } = [];

    public void AddItem(Product product, int quantity)
    {
        if (product == null) ArgumentNullException.ThrowIfNull(product);
        if (quantity <= 0) throw new ArgumentException("Quantity should be greater than zero",
        nameof(quantity));

        var existingItem = FindItem(product.Id);

        if (existingItem == null)
        {
            Items.Add(new BasketItem
            {
                Product = product,
                Quantity = quantity
            });
        }
        else
        {
            existingItem.Quantity += quantity;
        }
    }

    public void RemoveItem(int productId, int quantity)
    {
        if (quantity <= 0) throw new ArgumentException("Quantity should be greater than zero",
            nameof(quantity));

        var item = FindItem(productId);
        if (item == null) return; // 何もせずにメソッドを終了

        item.Quantity -= quantity; 
        if (item.Quantity <= 0) Items.Remove(item); //0以下になるまでは数量を減らすだけ
    }

    private BasketItem? FindItem(int id)
    {
        throw new NotImplementedException();
    }
}
