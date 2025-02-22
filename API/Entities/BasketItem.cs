using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("BasketItems")] //Table nameを指定
public class BasketItem
{
    public int Id { get; set; }
    public int Quantity { get; set; }

    // navigation properties
    public int ProductId { get; set; }
    public required Product Product { get; set; }

    public int BasketId { get; set; }   //ナビゲーションプロパティを追加。バスケットに関連付ける？
    public Basket Basket { get; set; } = null!; //requred消した

}