// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "TakeFurnitureMakeReq.proto" (syntax proto3)
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
 *   CMD_ID = 4506;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message TakeFurnitureMakeReq
 */
export interface TakeFurnitureMakeReq {
    /**
     * @generated from protobuf field: uint32 index = 12;
     */
    index: number;
    /**
     * @generated from protobuf field: bool is_fast_finish = 2;
     */
    isFastFinish: boolean;
    /**
     * @generated from protobuf field: uint32 make_id = 7;
     */
    makeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeReq$Type extends MessageType<TakeFurnitureMakeReq> {
    constructor() {
        super("TakeFurnitureMakeReq", [
            { no: 12, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_fast_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<TakeFurnitureMakeReq>): TakeFurnitureMakeReq {
        const message = { index: 0, isFastFinish: false, makeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<TakeFurnitureMakeReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TakeFurnitureMakeReq): TakeFurnitureMakeReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 index */ 12:
                    message.index = reader.uint32();
                    break;
                case /* bool is_fast_finish */ 2:
                    message.isFastFinish = reader.bool();
                    break;
                case /* uint32 make_id */ 7:
                    message.makeId = reader.uint32();
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
    internalBinaryWrite(message: TakeFurnitureMakeReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 index = 12; */
        if (message.index !== 0)
            writer.tag(12, WireType.Varint).uint32(message.index);
        /* bool is_fast_finish = 2; */
        if (message.isFastFinish !== false)
            writer.tag(2, WireType.Varint).bool(message.isFastFinish);
        /* uint32 make_id = 7; */
        if (message.makeId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeFurnitureMakeReq
 */
export const TakeFurnitureMakeReq = new TakeFurnitureMakeReq$Type();
