<?php
namespace users\V1\Rest\Users;

use Laminas\Stdlib;

class UsersEntity implements Stdlib\ArraySerializableInterface
{
    /**
     * @var mixed[]
     */
    private $interest;

    /**
     * @param mixed[] $interest
     */
    public function __construct(array $interest)
    {
        $this->interest = $interest;
    }

    public function exchangeArray(array $array)
    {
        $this->interest = $array;
    }

    public function getArrayCopy()
    {
        return $this->interest;
    }
}
