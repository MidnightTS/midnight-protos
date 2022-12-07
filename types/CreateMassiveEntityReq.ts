// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "CreateMassiveEntityReq.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ClientMassiveEntity } from "./ClientMassiveEntity";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 311;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message CreateMassiveEntityReq
 */
export interface CreateMassiveEntityReq {
    /**
     * @generated from protobuf field: repeated ClientMassiveEntity massive_entity_list = 3;
     */
    massiveEntityList: ClientMassiveEntity[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateMassiveEntityReq$Type extends MessageType<CreateMassiveEntityReq> {
    constructor() {
        super("CreateMassiveEntityReq", [
            { no: 3, name: "massive_entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientMassiveEntity }
        ]);
    }
    create(value?: PartialMessage<CreateMassiveEntityReq>): CreateMassiveEntityReq {
        const message = { massiveEntityList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateMassiveEntityReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateMassiveEntityReq): CreateMassiveEntityReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ClientMassiveEntity massive_entity_list */ 3:
                    message.massiveEntityList.push(ClientMassiveEntity.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateMassiveEntityReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ClientMassiveEntity massive_entity_list = 3; */
        for (let i = 0; i < message.massiveEntityList.length; i++)
            ClientMassiveEntity.internalBinaryWrite(message.massiveEntityList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateMassiveEntityReq
 */
export const CreateMassiveEntityReq = new CreateMassiveEntityReq$Type();