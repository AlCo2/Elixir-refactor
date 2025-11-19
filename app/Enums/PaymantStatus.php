<?php

namespace App\Enums;

enum PaymantStatus:int
{
    case UNPAID = 0;
    case PAID = 1;
    case FAILED = 2;
}
