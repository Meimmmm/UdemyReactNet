using API.Data;
using Microsoft.EntityFrameworkCore;

//WebApplication は、ASP.NET Core アプリケーションをホストし、管理するためのクラス
//WebApplicationBuilder は、アプリケーションの構成、サービス登録、ミドルウェアの設定などを行うための機能を提供
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("defaultConnection"));
});

//ASP.NET Core アプリケーションの構成が完了した後、アプリケーションのインスタンスを生成する
//app を使って、ミドルウェアの設定、ルーティング設定などを行い、最終的に app.Run() でアプリケーションを実行する
var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapControllers();

DbInitializer.InitDb(app);

app.Run();
