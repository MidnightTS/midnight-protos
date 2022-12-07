// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ChessPlayerInfoNotify.proto" (syntax proto3)
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
import { ChessPlayerInfo } from "./ChessPlayerInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5365;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ChessPlayerInfoNotify
 */
export interface ChessPlayerInfoNotify {
    /**
     * @generated from protobuf field: ChessPlayerInfo player_info = 12;
     */
    playerInfo?: ChessPlayerInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class ChessPlayerInfoNotify$Type extends MessageType<ChessPlayerInfoNotify> {
    constructor() {
        super("ChessPlayerInfoNotify", [
            { no: 12, name: "player_info", kind: "message", T: () => ChessPlayerInfo }
        ]);
    }
    create(value?: PartialMessage<ChessPlayerInfoNotify>): ChessPlayerInfoNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ChessPlayerInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChessPlayerInfoNotify): ChessPlayerInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ChessPlayerInfo player_info */ 12:
                    message.playerInfo = ChessPlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
    internalBinaryWrite(message: ChessPlayerInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ChessPlayerInfo player_info = 12; */
        if (message.playerInfo)
            ChessPlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessPlayerInfoNotify
 */
export const ChessPlayerInfoNotify = new ChessPlayerInfoNotify$Type();
