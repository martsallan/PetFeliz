<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class petfeliz extends Mailable
{
    use Queueable, SerializesModels;

    private $order;



    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject('pedido');
        $this->to($this->order->email,$this->order->name);
        return $this->markdown('mail.petfeliz',[
            'order' => $this->order
        ]);
    }
}
