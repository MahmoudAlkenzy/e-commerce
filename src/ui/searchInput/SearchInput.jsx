/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function SearchInput({ setSearchTearm, searchTearm }) {
    return (
        <div>
            <input
                className="form-control"
                value={searchTearm}
                onChange={(e) => setSearchTearm(e.target.value)}
                placeholder="Search"
            />
        </div>
    );
}
