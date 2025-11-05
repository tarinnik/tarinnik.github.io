const MESSAGES = [
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Map Maestros "
    },
    {
        "type": "riddle_success",
        "duckId": "288e21b9-e890-4361-9a66-2c4c190976b4",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Map Maestros "
    },
    {
        "type": "riddle_success",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Map Maestros "
    },
    {
        "type": "riddle_fail",
        "duckId": "3616ba1d-3880-4074-a6c1-fb5de14721a0",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "645e47d2-a6c0-4de0-971c-cb9a25a11b6f",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Nomadic Warriors"
    },
    {
        "type": "duck_found",
        "id": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "c734642b-eae3-4955-8047-4ef474ff4003",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Povo "
    },
    {
        "type": "duck_found",
        "id": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "b18c4a25-e11d-4e0f-a6e5-4cb9199d083a",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "The three fleas"
    },
    {
        "type": "duck_found",
        "id": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "cc377a04-d4ad-4726-8870-d9a6ef4e6a0b",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "3132913b-e6da-498a-b149-1f119ad6c64c",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "39ba5b30-a6c6-4b01-82ab-afa34c21763f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "0fbfdf1d-58d4-4a14-b8e1-009ce3a53000",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "The three fleas"
    },
    {
        "type": "duck_found",
        "id": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "The three fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "ad798efb-9b47-4729-957c-9b1ae82d2b32",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "The three fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "Nomadic Warriors"
    },
    {
        "type": "duck_found",
        "id": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "cc377a04-d4ad-4726-8870-d9a6ef4e6a0b",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "777417b4-9a96-4766-8c11-7712a6cc6607",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "3e717a10-32e7-4115-b9fe-6f061e924ff4",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "816134ce-507d-4d9c-9409-4a6c8bbf60b7",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "288e21b9-e890-4361-9a66-2c4c190976b4",
        "team": "The Three Fleas"
    },
    {
        "type": "add_points",
        "team": "The Three fleas",
        "points": 7
    },
    {
        "type": "riddle_fail",
        "duckId": "816134ce-507d-4d9c-9409-4a6c8bbf60b7",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "3e717a10-32e7-4115-b9fe-6f061e924ff4",
        "team": "Nomadic Warriors"
    },
    {
        "type": "add_points",
        "team": "The Three fleas",
        "points": 7
    },
    {
        "type": "riddle_fail",
        "duckId": "0cdae410-fe54-467a-8d41-474a24920fd6",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "cc377a04-d4ad-4726-8870-d9a6ef4e6a0b",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "Jarrella"
    },
    {
        "type": "add_points",
        "team": "The Three fleas",
        "points": -14
    },
    {
        "type": "riddle_fail",
        "duckId": "f4f0bfcb-8c46-43ba-9cbe-53e0b86dbd11",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "add_points",
        "team": "The Three Fleas",
        "points": 7
    },
    {
        "type": "duck_found",
        "id": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Povo "
    },
    {
        "type": "add_points",
        "team": "The three fleas",
        "points": -7
    },
    {
        "type": "riddle_fail",
        "duckId": "c734642b-eae3-4955-8047-4ef474ff4003",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "39ba5b30-a6c6-4b01-82ab-afa34c21763f",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "288e21b9-e890-4361-9a66-2c4c190976b4",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "3616ba1d-3880-4074-a6c1-fb5de14721a0",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Nomadic Warriors"
    },
    {
        "type": "duck_found",
        "id": "55946dd2-182f-4b77-9805-4f88d6501888",
        "team": "Mim’s Favourites"
    },
    {
        "type": "duck_found",
        "id": "3616ba1d-3880-4074-a6c1-fb5de14721a0",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "b18c4a25-e11d-4e0f-a6e5-4cb9199d083a",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "b0210f01-872f-4cf9-8225-3888aa604f61",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "1a77a70c-fff4-4a08-bcc4-69d5413eb14f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "3616ba1d-3880-4074-a6c1-fb5de14721a0",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "1a77a70c-fff4-4a08-bcc4-69d5413eb14f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "288e21b9-e890-4361-9a66-2c4c190976b4",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "645e47d2-a6c0-4de0-971c-cb9a25a11b6f",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "645e47d2-a6c0-4de0-971c-cb9a25a11b6f",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "0ab272a2-149a-4fc7-9929-d115271baa6c",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Mim’s Favourites"
    },
    {
        "type": "duck_found",
        "id": "645e47d2-a6c0-4de0-971c-cb9a25a11b6f",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "2e422b98-35d5-441e-acd1-9046bd8d526f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "2e422b98-35d5-441e-acd1-9046bd8d526f",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "f4f0bfcb-8c46-43ba-9cbe-53e0b86dbd11",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "b0210f01-872f-4cf9-8225-3888aa604f61",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "Povo"
    },
    {
        "type": "duck_found",
        "id": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Povo"
    },
    {
        "type": "riddle_fail",
        "duckId": "0cdae410-fe54-467a-8d41-474a24920fd6",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "f7bcd4ca-9604-4642-93e4-e134b0a81fd5",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "b18c4a25-e11d-4e0f-a6e5-4cb9199d083a",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "55946dd2-182f-4b77-9805-4f88d6501888",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Mim’s Favourites"
    },
    {
        "type": "add_points",
        "team": "Povo ",
        "points": 4
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Mim’s Favourites"
    },
    {
        "type": "add_points",
        "team": "Povo",
        "points": -4
    },
    {
        "type": "riddle_success",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_fail",
        "duckId": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Mim’s Favourites"
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Barramundi"
    },
    {
        "type": "duck_found",
        "id": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "f4f0bfcb-8c46-43ba-9cbe-53e0b86dbd11",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "f4f0bfcb-8c46-43ba-9cbe-53e0b86dbd11",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "The Three Fleas"
    },
    {
        "type": "master_notification",
        "message": "Lunch is ready!"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "The Three Fleas"
    },
    {
        "type": "clear_notification"
    },
    {
        "type": "add_points",
        "team": "Mim's Favourites",
        "points": 15
    },
    {
        "type": "add_points",
        "team": "Mim’s Favourites",
        "points": 15
    },
    {
        "type": "add_points",
        "team": "Mim's Favourites",
        "points": -15
    },
    {
        "type": "add_points",
        "team": "Jarrella",
        "points": 13
    },
    {
        "type": "add_points",
        "team": "Barramundi",
        "points": 13
    },
    {
        "type": "riddle_fail",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Nomadic Warriors"
    },
    {
        "type": "add_points",
        "team": "Mr and Mrs Fox",
        "points": 14
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Nomadic Warriors"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Nomadic Warriors"
    },
    {
        "type": "add_points",
        "team": "The Three Fleas",
        "points": 8
    },
    {
        "type": "add_points",
        "team": "The Three Fleas",
        "points": 5
    },
    {
        "type": "add_points",
        "team": "Jarrella",
        "points": 15
    },
    {
        "type": "add_points",
        "team": "Mr and Mrs Fox",
        "points": 10
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "288e21b9-e890-4361-9a66-2c4c190976b4",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "c734642b-eae3-4955-8047-4ef474ff4003",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "Povo "
    },
    {
        "type": "duck_found",
        "id": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "645e47d2-a6c0-4de0-971c-cb9a25a11b6f",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "66e54869-5e75-4f5e-b364-4e7f4a5c2011",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "7c5c5240-247e-427d-b48f-fcac5f6dcfdf",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "2f9a1550-c4da-441d-a635-7a65e842888e",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "b18c4a25-e11d-4e0f-a6e5-4cb9199d083a",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "df9faad5-826d-4e8c-8bcf-b9a4a64cfc77",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "73e2634f-d9ca-472c-8cce-effe3b716714",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "1126e7b7-b0fe-4f81-8834-0f233897223c",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "f4f0bfcb-8c46-43ba-9cbe-53e0b86dbd11",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "87d82b33-c137-421c-91c8-7d9e51a0a1dc",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "3132913b-e6da-498a-b149-1f119ad6c64c",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "0fbfdf1d-58d4-4a14-b8e1-009ce3a53000",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "39ba5b30-a6c6-4b01-82ab-afa34c21763f",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "0b32ea83-e3a6-4066-abd5-47910b9c45ca",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "0fbfdf1d-58d4-4a14-b8e1-009ce3a53000",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "3132913b-e6da-498a-b149-1f119ad6c64c",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "9ed7c9f8-10a7-4e7c-92de-5eecefbb0106",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "0dfc9bb9-815f-432f-9765-f2579df7c01e",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "24e57094-8f38-47ab-b586-e0ccd1b92a86",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6095ee4f-6cc6-4cfb-8095-9a52dce34511",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "0cdae410-fe54-467a-8d41-474a24920fd6",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "b0210f01-872f-4cf9-8225-3888aa604f61",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "df24bf0e-f7d4-424f-86a3-862ac064adcc",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "f615e411-bf86-44c4-9c9a-51e63dc5ad8f",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "b0210f01-872f-4cf9-8225-3888aa604f61",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "2b872a01-83e0-4343-a67d-64208e0a9c11",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "4b04d1ed-12a6-41ba-adc2-f55446fec045",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "777417b4-9a96-4766-8c11-7712a6cc6607",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Mim’s Favourites"
    },
    {
        "type": "duck_found",
        "id": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "816134ce-507d-4d9c-9409-4a6c8bbf60b7",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "3e717a10-32e7-4115-b9fe-6f061e924ff4",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "cc377a04-d4ad-4726-8870-d9a6ef4e6a0b",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "6aa4cff9-5939-40da-9bed-a133d15a1626",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "0cdae410-fe54-467a-8d41-474a24920fd6",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "duck_found",
        "id": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Barramundi"
    },
    {
        "type": "riddle_fail",
        "duckId": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "386a1714-ada1-4e67-b771-7feb866f3fa5",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "4e370429-6a78-493e-8dd5-eca8733fa721",
        "team": "Barramundi"
    },
    {
        "type": "riddle_success",
        "duckId": "ad798efb-9b47-4729-957c-9b1ae82d2b32",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "ad798efb-9b47-4729-957c-9b1ae82d2b32",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "a08c9015-1bd6-4483-b264-d2d659bf1fb8",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "13fee7da-145d-417d-8f50-d892456d35e3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_fail",
        "duckId": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "163abfce-34e0-407a-8895-71703560ff94",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "4e2f0d11-c7db-450e-882e-2d3e10d454d3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "87c622b3-f5c4-49c2-b9f0-d6aac023166f",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "a8c087df-fba3-43b5-8da5-73ea6842559b",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "314ebe31-5fd8-4248-b010-03324927b062",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "ad798efb-9b47-4729-957c-9b1ae82d2b32",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_fail",
        "duckId": "11f2c865-d39b-42cc-b0fe-fbe511dffa3c",
        "team": "Mr and Mrs Fox"
    },
    {
        "type": "riddle_success",
        "duckId": "d0307ad3-35dd-47a1-b63d-e2dcaf825de3",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "fa0fc3e7-2123-43ef-8ea9-1ed13fdee5e0",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "57e354c0-d92e-4e7c-9a07-e34d50192cff",
        "team": "Jarrella"
    },
    {
        "type": "duck_found",
        "id": "95b0131b-af53-47f9-85c0-7047b536fa42",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "a735096a-b2c5-4996-82b2-101f90ed4ef4",
        "team": "Jarrella"
    },
    {
        "type": "riddle_success",
        "duckId": "717aaaf1-37c3-4f33-b00a-316b3842230c",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "b18c4a25-e11d-4e0f-a6e5-4cb9199d083a",
        "team": "Povo "
    },
    {
        "type": "riddle_success",
        "duckId": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "Povo "
    },
    {
        "type": "riddle_fail",
        "duckId": "22b2646e-16ef-416d-bca3-f37e97974f72",
        "team": "Povo "
    },
    {
        "type": "duck_found",
        "id": "7bf49d18-7b43-4a81-a5bd-d0fa8b7aa3d1",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "39ba5b30-a6c6-4b01-82ab-afa34c21763f",
        "team": "Jarrella"
    },
    {
        "type": "riddle_fail",
        "duckId": "0fbfdf1d-58d4-4a14-b8e1-009ce3a53000",
        "team": "The Three Fleas"
    },
    {
        "type": "duck_found",
        "id": "2e422b98-35d5-441e-acd1-9046bd8d526f",
        "team": "Mim’s Favourites"
    },
    {
        "type": "duck_found",
        "id": "ea76346e-62d8-4e30-81c5-317c0010a447",
        "team": "Jarrella"
    },
    {
        "type": "master_notification",
        "message": "Game is over!"
    },
    {
        "type": "riddle_fail",
        "duckId": "25b3ebe9-105f-4ca1-92ba-24ed22dd8af3",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c2c8cc45-4838-4680-ad67-7e92c41b97a5",
        "team": "The Three Fleas"
    },
    {
        "type": "riddle_success",
        "duckId": "c59f83fa-643b-451c-affe-72fbf01000e3",
        "team": "The Three Fleas"
    }
]