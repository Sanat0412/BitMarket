import React, { useState } from 'react'

const CoinsTable = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false);
   
    return (
        <div>
            Coins Table
        </div>
    )
}

export default CoinsTable
