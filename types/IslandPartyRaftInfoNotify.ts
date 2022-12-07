// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IslandPartyRaftInfoNotify.proto" (syntax proto3)
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
 *   CMD_ID = 5589;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message IslandPartyRaftInfoNotify
 */
export interface IslandPartyRaftInfoNotify {
    /**
     * @generated from protobuf field: uint32 Unk3300_HNECEGNMKNK = 4 [json_name = "Unk3300HNECEGNMKNK"];
     */
    unk3300HNECEGNMKNK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_FBACMOFGPGJ = 1 [json_name = "Unk3300FBACMOFGPGJ"];
     */
    unk3300FBACMOFGPGJ: number;
    /**
     * @generated from protobuf field: uint32 point_id = 8;
     */
    pointId: number;
    /**
     * @generated from protobuf field: uint32 coin = 14;
     */
    coin: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartyRaftInfoNotify$Type extends MessageType<IslandPartyRaftInfoNotify> {
    constructor() {
        super("IslandPartyRaftInfoNotify", [
            { no: 4, name: "Unk3300_HNECEGNMKNK", kind: "scalar", jsonName: "Unk3300HNECEGNMKNK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_FBACMOFGPGJ", kind: "scalar", jsonName: "Unk3300FBACMOFGPGJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<IslandPartyRaftInfoNotify>): IslandPartyRaftInfoNotify {
        const message = { unk3300HNECEGNMKNK: 0, unk3300FBACMOFGPGJ: 0, pointId: 0, coin: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IslandPartyRaftInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IslandPartyRaftInfoNotify): IslandPartyRaftInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_HNECEGNMKNK = 4 [json_name = "Unk3300HNECEGNMKNK"];*/ 4:
                    message.unk3300HNECEGNMKNK = reader.uint32();
                    break;
                case /* uint32 Unk3300_FBACMOFGPGJ = 1 [json_name = "Unk3300FBACMOFGPGJ"];*/ 1:
                    message.unk3300FBACMOFGPGJ = reader.uint32();
                    break;
                case /* uint32 point_id */ 8:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 coin */ 14:
                    message.coin = reader.uint32();
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
    internalBinaryWrite(message: IslandPartyRaftInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_HNECEGNMKNK = 4 [json_name = "Unk3300HNECEGNMKNK"]; */
        if (message.unk3300HNECEGNMKNK !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300HNECEGNMKNK);
        /* uint32 Unk3300_FBACMOFGPGJ = 1 [json_name = "Unk3300FBACMOFGPGJ"]; */
        if (message.unk3300FBACMOFGPGJ !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300FBACMOFGPGJ);
        /* uint32 point_id = 8; */
        if (message.pointId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.pointId);
        /* uint32 coin = 14; */
        if (message.coin !== 0)
            writer.tag(14, WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartyRaftInfoNotify
 */
export const IslandPartyRaftInfoNotify = new IslandPartyRaftInfoNotify$Type();
