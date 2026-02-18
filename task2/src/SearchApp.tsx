import { useMemo, useState } from "react";
import type React from "react";
import type { User } from "./types";
import { UserCard } from "./UserCard";

const INITIAL_DATA: User[] = [
    { name: "gfe4w", email: "vewj@mail.com", age: 25 },
    { name: "gew", email: "oe@mail.com", age: 30 },
    { name: "Bgrhi", email: "baxn@mail.com", age: 19 },
    { name: "Negwk", email: "nveniwk@mail.com", age: 28 },
    { name: "Nafenwoiz", email: "nveiowz@mail.com", age: 22 },
];

export const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        setFilteredUsers(
            users.filter((u) => u.name.toLowerCase().includes(term.toLowerCase()))
        );
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchTerm("");
        setFilteredUsers(users);
    };

    const hasResults = useMemo(() => filteredUsers.length > 0, [filteredUsers]);

    return (
        <div style={{ padding: 20 }}>
            <h1>Lab 5.2 — User Search (TS)</h1>

            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ padding: 8, width: 240 }}
            />
            <button onClick={handleClear} style={{ marginLeft: 8, padding: 8 }}>
                Clear
            </button>

            <div style={{ marginTop: 16 }}>
                {!hasResults && <p>No results found</p>}

                {filteredUsers.map((user) => (
                    <UserCard key={user.email} user={user}>
                        <small>typed card ✅</small>
                    </UserCard>
                ))}
            </div>
        </div>
    );
};