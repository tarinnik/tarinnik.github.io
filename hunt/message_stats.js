const MESSAGES = [
  {
    "type": "riddle_fail",
    "duckId": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "duck_found",
    "id": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "d2b4034d-76bc-4e55-a579-f45aa8bceb09",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "d2b4034d-76bc-4e55-a579-f45aa8bceb09",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "duck_found",
    "id": "3b6958d7-db08-4393-8a46-05d9b4795900",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "d1940c85-da25-4adf-a900-411f2a04dc8b",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "3f02a6fe-ef78-4e67-af78-206bbf3caccf",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "2e26d831-87ad-4028-b903-bc54698eba5d",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "abceec35-3baf-4175-959f-a19a7b656bf6",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "97d825c2-8c9e-42cb-b546-206e71f94d66",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "71695e16-16a6-4822-bf6e-825d5aa6d1a7",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "a338f424-94fb-495f-8b6f-6a4ff3f6a7e3",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "2a222f56-3775-401b-8f93-da7551572d21",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "e8155933-8dac-4f3d-b2ba-0308c5cdb7f6",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "794a7457-b162-4767-a036-cd935123a855",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "d1940c85-da25-4adf-a900-411f2a04dc8b",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "fe88647e-d895-436e-99a9-20cf585a9a6d",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "0d99e404-55f2-43c5-8899-ffd99ef463ea",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "0d99e404-55f2-43c5-8899-ffd99ef463ea",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "46c8e853-5552-471f-a25d-ee5a6be2ad66",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "f0dea5f0-37ec-493a-837b-d8b5c7bf55e6",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "1e65484b-1e30-4891-aae2-bf188e161107",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "c97c083c-5454-484b-bde9-84be6dba04f8",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "3e59590a-c19f-495d-a034-5b82bcf0b918",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "46c8e853-5552-471f-a25d-ee5a6be2ad66",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "f0dea5f0-37ec-493a-837b-d8b5c7bf55e6",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "d2707501-c6cd-4c23-9d09-4e30e185c65a",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "c97c083c-5454-484b-bde9-84be6dba04f8",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "4297cdc6-8fbe-4f83-9aec-8bed3521e9e1",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "c97c083c-5454-484b-bde9-84be6dba04f8",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "duck_found",
    "id": "e8155933-8dac-4f3d-b2ba-0308c5cdb7f6",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "3e59590a-c19f-495d-a034-5b82bcf0b918",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "4297cdc6-8fbe-4f83-9aec-8bed3521e9e1",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "d2707501-c6cd-4c23-9d09-4e30e185c65a",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "d2707501-c6cd-4c23-9d09-4e30e185c65a",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "a338f424-94fb-495f-8b6f-6a4ff3f6a7e3",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "2a222f56-3775-401b-8f93-da7551572d21",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "4297cdc6-8fbe-4f83-9aec-8bed3521e9e1",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "f0dea5f0-37ec-493a-837b-d8b5c7bf55e6",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "96ac2da0-7ac6-4599-81d7-8b37952e625a",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "1e65484b-1e30-4891-aae2-bf188e161107",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "1e65484b-1e30-4891-aae2-bf188e161107",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "96ac2da0-7ac6-4599-81d7-8b37952e625a",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "71695e16-16a6-4822-bf6e-825d5aa6d1a7",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "fe88647e-d895-436e-99a9-20cf585a9a6d",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "3ed3ff0b-5e9d-48d6-83d3-ab5a5c279ee5",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "fe88647e-d895-436e-99a9-20cf585a9a6d",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "12a02369-7eea-4dc9-890e-85ab8f9ba625",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "fe88647e-d895-436e-99a9-20cf585a9a6d",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "d1940c85-da25-4adf-a900-411f2a04dc8b",
    "team": "Maccas"
  },
  {
    "type": "add_points",
    "team": "green goblins",
    "points": -2
  },
  {
    "type": "add_points",
    "team": "Green goblins",
    "points": 2
  },
  {
    "type": "riddle_success",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "duck_found",
    "id": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "Green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "2a222f56-3775-401b-8f93-da7551572d21",
    "team": "Green goblins"
  },
  {
    "type": "duck_found",
    "id": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "12a02369-7eea-4dc9-890e-85ab8f9ba625",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "Green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "1e65484b-1e30-4891-aae2-bf188e161107",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "46c8e853-5552-471f-a25d-ee5a6be2ad66",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "46c8e853-5552-471f-a25d-ee5a6be2ad66",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "0d99e404-55f2-43c5-8899-ffd99ef463ea",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "d2b4034d-76bc-4e55-a579-f45aa8bceb09",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "green goblins"
  },
  {
    "type": "add_points",
    "team": "green goblins",
    "points": 19
  },
  {
    "type": "add_points",
    "team": "Green goblins",
    "points": -19
  },
  {
    "type": "riddle_fail",
    "duckId": "349ea9b1-eaf2-460a-8fad-26563dbc1f5d",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "3f02a6fe-ef78-4e67-af78-206bbf3caccf",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "abceec35-3baf-4175-959f-a19a7b656bf6",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "794a7457-b162-4767-a036-cd935123a855",
    "team": "Maccas"
  },
  {
    "type": "riddle_fail",
    "duckId": "b90a6733-034a-46f3-8da5-8cfebdfcbce1",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "2e26d831-87ad-4028-b903-bc54698eba5d",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "abceec35-3baf-4175-959f-a19a7b656bf6",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "103583ac-7a9d-4c14-a84f-2c5d9641d897",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "3f02a6fe-ef78-4e67-af78-206bbf3caccf",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "493a4500-3f88-4e55-b886-8884c37264ba",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_fail",
    "duckId": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "be725bde-3ee6-4871-bcc0-beeacb6d700d",
    "team": "Buffy s5e6"
  },
  {
    "type": "riddle_success",
    "duckId": "2789dd80-7fc4-414e-8446-afbb2ab2cfa0",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "68def74f-4781-4197-a5ee-cb775f2f4f3f",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "d2b4034d-76bc-4e55-a579-f45aa8bceb09",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "f0dea5f0-37ec-493a-837b-d8b5c7bf55e6",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "Cocos"
  },
  {
    "type": "duck_found",
    "id": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "3f02a6fe-ef78-4e67-af78-206bbf3caccf",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "Buffy s5e6"
  },
  {
    "type": "duck_found",
    "id": "3f02a6fe-ef78-4e67-af78-206bbf3caccf",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "d2707501-c6cd-4c23-9d09-4e30e185c65a",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "c97c083c-5454-484b-bde9-84be6dba04f8",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "4297cdc6-8fbe-4f83-9aec-8bed3521e9e1",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "abceec35-3baf-4175-959f-a19a7b656bf6",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "b1cb7354-56e1-4d22-97f6-842bcbcddab1",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "194b3451-46ee-440c-9426-54e714180013",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "d395aae4-ccc5-4b54-8ec4-ea28f05f42b2",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "a338f424-94fb-495f-8b6f-6a4ff3f6a7e3",
    "team": "Cocos"
  },
  {
    "type": "riddle_fail",
    "duckId": "0d99e404-55f2-43c5-8899-ffd99ef463ea",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "0eb721fb-ea2a-4e73-b13e-a133ae107b16",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "bec2ac63-7768-439e-9125-4cd61e6942d3",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "bbc8cf37-1711-4c98-a2da-c5344c2ad94e",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_fail",
    "duckId": "fe88647e-d895-436e-99a9-20cf585a9a6d",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "riddle_success",
    "duckId": "3e59590a-c19f-495d-a034-5b82bcf0b918",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "abceec35-3baf-4175-959f-a19a7b656bf6",
    "team": "Cocos"
  },
  {
    "type": "master_notification",
    "message": "7 ducks left, you might have to look harder for these ones!"
  },
  {
    "type": "riddle_fail",
    "duckId": "3ed3ff0b-5e9d-48d6-83d3-ab5a5c279ee5",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "clear_notification"
  },
  {
    "type": "riddle_fail",
    "duckId": "26da45cd-1ead-49c1-9d90-5b60ffba0a8e",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "fed42df4-9e0e-4423-a4df-dbdf2724a9fe",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "2a222f56-3775-401b-8f93-da7551572d21",
    "team": "green goblins"
  },
  {
    "type": "master_notification",
    "message": "Are you guys stumped?"
  },
  {
    "type": "riddle_fail",
    "duckId": "b24b2641-c113-4546-b561-e13c61af1d78",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "b90a6733-034a-46f3-8da5-8cfebdfcbce1",
    "team": "Maccas"
  },
  {
    "type": "duck_found",
    "id": "4297cdc6-8fbe-4f83-9aec-8bed3521e9e1",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "c97c083c-5454-484b-bde9-84be6dba04f8",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "d2707501-c6cd-4c23-9d09-4e30e185c65a",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "1e65484b-1e30-4891-aae2-bf188e161107",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "0621e81e-a32e-4df1-a716-d65cf14e06fe",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "17a13c89-ace1-494b-a649-043e5fad4977",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "a338f424-94fb-495f-8b6f-6a4ff3f6a7e3",
    "team": "-"
  },
  {
    "type": "clear_notification"
  },
  {
    "type": "duck_found",
    "id": "2a222f56-3775-401b-8f93-da7551572d21",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "a7e49e3d-71d2-4206-8da7-c8088dae3059",
    "team": "green goblins"
  },
  {
    "type": "master_notification",
    "message": "Maybe you should start praying"
  },
  {
    "type": "duck_found",
    "id": "3ed3ff0b-5e9d-48d6-83d3-ab5a5c279ee5",
    "team": "Fleas Beez Neez"
  },
  {
    "type": "clear_notification"
  },
  {
    "type": "master_notification",
    "message": "Good praying guys"
  },
  {
    "type": "riddle_fail",
    "duckId": "2e26d831-87ad-4028-b903-bc54698eba5d",
    "team": "Maccas"
  },
  {
    "type": "clear_notification"
  },
  {
    "type": "riddle_fail",
    "duckId": "3ed3ff0b-5e9d-48d6-83d3-ab5a5c279ee5",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "d48f5f31-9940-48b1-ab05-d653cf28e97b",
    "team": "Cocos"
  },
  {
    "type": "master_notification",
    "message": "Near the picnic area, closer to the path "
  },
  {
    "type": "duck_found",
    "id": "f2978dc6-216b-4d5b-81d8-631cf8883fef",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "751d6bd3-a2a7-4f51-8133-97fae9c11e22",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "71695e16-16a6-4822-bf6e-825d5aa6d1a7",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "Cocos"
  },
  {
    "type": "riddle_success",
    "duckId": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "Cocos"
  },
  {
    "type": "clear_notification"
  },
  {
    "type": "riddle_fail",
    "duckId": "3e59590a-c19f-495d-a034-5b82bcf0b918",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "b90a6733-034a-46f3-8da5-8cfebdfcbce1",
    "team": "Maccas"
  },
  {
    "type": "riddle_success",
    "duckId": "2e26d831-87ad-4028-b903-bc54698eba5d",
    "team": "green goblins"
  },
  {
    "type": "duck_found",
    "id": "71695e16-16a6-4822-bf6e-825d5aa6d1a7",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "17cc2c25-1f7a-4727-9c43-36141990e794",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "d1940c85-da25-4adf-a900-411f2a04dc8b",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_fail",
    "duckId": "5e55f578-c1ae-4a60-b2ce-cb719fd819cf",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "3b6958d7-db08-4393-8a46-05d9b4795900",
    "team": "The Better Stewells"
  },
  {
    "type": "duck_found",
    "id": "baf7052a-b431-44c9-a4ad-ff490b409d83",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "97d825c2-8c9e-42cb-b546-206e71f94d66",
    "team": "green goblins"
  },
  {
    "type": "riddle_fail",
    "duckId": "3b6958d7-db08-4393-8a46-05d9b4795900",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "d1940c85-da25-4adf-a900-411f2a04dc8b",
    "team": "green goblins"
  },
  {
    "type": "riddle_success",
    "duckId": "e8155933-8dac-4f3d-b2ba-0308c5cdb7f6",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "794a7457-b162-4767-a036-cd935123a855",
    "team": "The Better Stewells"
  },
  {
    "type": "riddle_success",
    "duckId": "e8155933-8dac-4f3d-b2ba-0308c5cdb7f6",
    "team": "The Better Stewells"
  }
];
