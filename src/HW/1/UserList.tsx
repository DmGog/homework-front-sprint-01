type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
};

type UserListPropsType = {
    users: UserType [];// ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={"hw01-users"}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((user, index) => {
                        return (// ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                            <li key={props.users[index].id} id={`hw01-user-${props.users[index].id}`}>
                                <strong>{props.users[index].name}</strong> (Age: {props.users[index].age})<strong> Address:</strong>
                                {props.users[index].address.street}, {props.users[index].address.city}
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
};
