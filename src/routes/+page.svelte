<form method="post">
    <p>Enter your PID and your VINCOIN wallet address below</p>

    <input id="id_field" type="text" placeholder="Enter PID here.."/>
    <input id="wallet_address" type="text" placeholder="Enter address here..."/>

    <button>GET <code>VINCOINS</code></button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    input {
        padding: 0.5em;
        min-height: 30px;
        min-width: 300px;
        border-radius: 1em;
        border: 1px solid #abc;
    }

    button {
        padding: 0.75em;
        border: none;
        border-radius: 5px;
        background-color: #3b7002;
        cursor: pointer;
        transition: background-color 0.5s;
        transition: color 0.25s 0.1s;
    }

    button:hover {
        scale: 1.05;
        color: #fff;
        background-color: #123456;
        box-shadow: 1px 0px 10px 1px #fff;
    }
</style>