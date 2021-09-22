<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('image',100)->default('http://www.farming2015mods.com/wp-content/uploads/2017/01/noimage.png');
            $table->float('price');
            $table->smallInteger('qtt_storage')->default(0);
            $table->timestamps();
        });

        DB::connection('mysql')->table('product')->insert(
            array(
                [
                    'name' => 'Ração Goldestain 20kg',
                    'description' => 'Uma ração balanceada e nutriitiva para o seu cachorro',
                    'price' => 35,
                    'qtt_storage'=>4,
                ],
                [
                    'name' => 'Brinquedo mordida-certa',
                    'description' => 'Brinquedo para o seu pet se divertir',
                    'price' => 22,
                    'qtt_storage'=>45,
                ],
                [
                    'name' => 'Coleira corporal',
                    'description' => 'Feita de um material resistente mas macio, para proporcionar o maior conforto ao seu animal.',
                    'price' => 62,
                    'qtt_storage'=>53,
                ],
                [
                    'name' => 'Comedouro',
                    'description' => 'Esse comedouro é ideal para pets de porte grande. Sua altura evita que os pets fiquem com o pescoço numa posição desconfortável na hora da refeição.',
                    'price' => 90,
                    'qtt_storage'=>34,
                ],
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
