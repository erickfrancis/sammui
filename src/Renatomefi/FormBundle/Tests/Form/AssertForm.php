<?php

namespace Renatomefi\FormBundle\Tests\Form;

/**
 * Class AssertForm
 * @package Renatomefi\FormBundle\Tests\Form
 * @codeCoverageIgnore
 */
trait AssertForm
{
    /**
     * @inheritdoc
     */
    protected function assertFormStructure($form)
    {
        $this->assertObjectHasAttribute('id', $form);
        $this->assertObjectHasAttribute('name', $form);
        $this->assertObjectHasAttribute('created_at', $form);
    }
}