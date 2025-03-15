global.$_XT = 
{
    assert: function(): boolean
    {
        return false;
    },

    [Symbol.toStringTag]: "$_XT"
};


// Seals object
Object.seal(global.$_XT);