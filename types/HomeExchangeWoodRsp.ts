// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeExchangeWoodRsp.proto" (syntax proto3)
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
 *   CMD_ID = 4885;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HomeExchangeWoodRsp
 */
export interface HomeExchangeWoodRsp {
    /**
     * @generated from protobuf field: int32 retcode = 15;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 exchanged_count = 8;
     */
    exchangedCount: number;
    /**
     * @generated from protobuf field: uint32 wood_count = 5;
     */
    woodCount: number;
    /**
     * @generated from protobuf field: uint32 wood_id = 9;
     */
    woodId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeExchangeWoodRsp$Type extends MessageType<HomeExchangeWoodRsp> {
    constructor() {
        super("HomeExchangeWoodRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "exchanged_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "wood_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "wood_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeExchangeWoodRsp>): HomeExchangeWoodRsp {
        const message = { retcode: 0, exchangedCount: 0, woodCount: 0, woodId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeExchangeWoodRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeExchangeWoodRsp): HomeExchangeWoodRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 exchanged_count */ 8:
                    message.exchangedCount = reader.uint32();
                    break;
                case /* uint32 wood_count */ 5:
                    message.woodCount = reader.uint32();
                    break;
                case /* uint32 wood_id */ 9:
                    message.woodId = reader.uint32();
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
    internalBinaryWrite(message: HomeExchangeWoodRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, WireType.Varint).int32(message.retcode);
        /* uint32 exchanged_count = 8; */
        if (message.exchangedCount !== 0)
            writer.tag(8, WireType.Varint).uint32(message.exchangedCount);
        /* uint32 wood_count = 5; */
        if (message.woodCount !== 0)
            writer.tag(5, WireType.Varint).uint32(message.woodCount);
        /* uint32 wood_id = 9; */
        if (message.woodId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.woodId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeExchangeWoodRsp
 */
export const HomeExchangeWoodRsp = new HomeExchangeWoodRsp$Type();
