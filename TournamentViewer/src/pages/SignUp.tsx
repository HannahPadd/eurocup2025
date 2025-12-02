


export default function SignUpPage() {
    return (
        <div>
            <h1 className="text-3xl">Sign up!</h1>

            <div>
                <form>
                    <div>
                        <label>
                            Player Name: <input name="playerName" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: <input name="playerPassword" type="password"></input>
                        </label>
                    </div>
                    <div>
                        <p>
                            Select the tournaments you want to participate in:
                        </p>
                        <label>
                            Tournaments: 
                            {/*<TournamentTable />*/}
                        </label>
                    </div>

                    <button type="submit" className="bg-lighter text-white p-2 rounded-lg">
                        Sign up!
                    </button>
                </form>
            </div>
        </div>
    )
}