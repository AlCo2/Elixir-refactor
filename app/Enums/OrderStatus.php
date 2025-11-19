<?php

namespace App\Enums;

enum OrderStatus: int
{
    case PENDING   = 0;
    case PAID      = 1;
    case SHIPPED   = 2;
    case CANCELLED = 3;
}
