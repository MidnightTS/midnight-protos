// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGTCTavernChallengeUpdateNotify.proto" (syntax proto3)
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
import { GCGTCTavernChallengeData } from "./GCGTCTavernChallengeData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 7907;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGTCTavernChallengeUpdateNotify
 */
export interface GCGTCTavernChallengeUpdateNotify {
    /**
     * @generated from protobuf field: GCGTCTavernChallengeData tavern_challenge = 12;
     */
    tavernChallenge?: GCGTCTavernChallengeData;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGTCTavernChallengeUpdateNotify$Type extends MessageType<GCGTCTavernChallengeUpdateNotify> {
    constructor() {
        super("GCGTCTavernChallengeUpdateNotify", [
            { no: 12, name: "tavern_challenge", kind: "message", T: () => GCGTCTavernChallengeData }
        ]);
    }
    create(value?: PartialMessage<GCGTCTavernChallengeUpdateNotify>): GCGTCTavernChallengeUpdateNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGTCTavernChallengeUpdateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGTCTavernChallengeUpdateNotify): GCGTCTavernChallengeUpdateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* GCGTCTavernChallengeData tavern_challenge */ 12:
                    message.tavernChallenge = GCGTCTavernChallengeData.internalBinaryRead(reader, reader.uint32(), options, message.tavernChallenge);
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
    internalBinaryWrite(message: GCGTCTavernChallengeUpdateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* GCGTCTavernChallengeData tavern_challenge = 12; */
        if (message.tavernChallenge)
            GCGTCTavernChallengeData.internalBinaryWrite(message.tavernChallenge, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTCTavernChallengeUpdateNotify
 */
export const GCGTCTavernChallengeUpdateNotify = new GCGTCTavernChallengeUpdateNotify$Type();
