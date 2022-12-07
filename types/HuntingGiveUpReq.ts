// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HuntingGiveUpReq.proto" (syntax proto3)
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
import { HuntingPair } from "./HuntingPair";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4308;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message HuntingGiveUpReq
 */
export interface HuntingGiveUpReq {
    /**
     * @generated from protobuf field: HuntingPair hunting_pair = 2;
     */
    huntingPair?: HuntingPair;
}
// @generated message type with reflection information, may provide speed optimized methods
class HuntingGiveUpReq$Type extends MessageType<HuntingGiveUpReq> {
    constructor() {
        super("HuntingGiveUpReq", [
            { no: 2, name: "hunting_pair", kind: "message", T: () => HuntingPair }
        ]);
    }
    create(value?: PartialMessage<HuntingGiveUpReq>): HuntingGiveUpReq {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HuntingGiveUpReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HuntingGiveUpReq): HuntingGiveUpReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* HuntingPair hunting_pair */ 2:
                    message.huntingPair = HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.huntingPair);
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
    internalBinaryWrite(message: HuntingGiveUpReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* HuntingPair hunting_pair = 2; */
        if (message.huntingPair)
            HuntingPair.internalBinaryWrite(message.huntingPair, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HuntingGiveUpReq
 */
export const HuntingGiveUpReq = new HuntingGiveUpReq$Type();
