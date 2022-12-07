// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayerPropChangeNotify.proto" (syntax proto3)
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
 *   CMD_ID = 116;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PlayerPropChangeNotify
 */
export interface PlayerPropChangeNotify {
    /**
     * @generated from protobuf field: uint32 prop_delta = 4;
     */
    propDelta: number;
    /**
     * @generated from protobuf field: uint32 prop_type = 13;
     */
    propType: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPropChangeNotify$Type extends MessageType<PlayerPropChangeNotify> {
    constructor() {
        super("PlayerPropChangeNotify", [
            { no: 4, name: "prop_delta", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "prop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerPropChangeNotify>): PlayerPropChangeNotify {
        const message = { propDelta: 0, propType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerPropChangeNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerPropChangeNotify): PlayerPropChangeNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 prop_delta */ 4:
                    message.propDelta = reader.uint32();
                    break;
                case /* uint32 prop_type */ 13:
                    message.propType = reader.uint32();
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
    internalBinaryWrite(message: PlayerPropChangeNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 prop_delta = 4; */
        if (message.propDelta !== 0)
            writer.tag(4, WireType.Varint).uint32(message.propDelta);
        /* uint32 prop_type = 13; */
        if (message.propType !== 0)
            writer.tag(13, WireType.Varint).uint32(message.propType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerPropChangeNotify
 */
export const PlayerPropChangeNotify = new PlayerPropChangeNotify$Type();