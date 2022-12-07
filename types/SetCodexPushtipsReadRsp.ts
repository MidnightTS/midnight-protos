// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SetCodexPushtipsReadRsp.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4205;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SetCodexPushtipsReadRsp
 */
export interface SetCodexPushtipsReadRsp {
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 type_id = 4;
     */
    typeId: number;
    /**
     * @generated from protobuf field: uint32 codex_id = 14;
     */
    codexId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SetCodexPushtipsReadRsp$Type extends MessageType<SetCodexPushtipsReadRsp> {
    constructor() {
        super("SetCodexPushtipsReadRsp", [
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "codex_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SetCodexPushtipsReadRsp>): SetCodexPushtipsReadRsp {
        const message = { retcode: 0, typeId: 0, codexId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SetCodexPushtipsReadRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetCodexPushtipsReadRsp): SetCodexPushtipsReadRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 type_id */ 4:
                    message.typeId = reader.uint32();
                    break;
                case /* uint32 codex_id */ 14:
                    message.codexId = reader.uint32();
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
    internalBinaryWrite(message: SetCodexPushtipsReadRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* uint32 type_id = 4; */
        if (message.typeId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.typeId);
        /* uint32 codex_id = 14; */
        if (message.codexId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.codexId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetCodexPushtipsReadRsp
 */
export const SetCodexPushtipsReadRsp = new SetCodexPushtipsReadRsp$Type();