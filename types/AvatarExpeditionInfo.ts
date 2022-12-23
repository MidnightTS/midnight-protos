// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AvatarExpeditionInfo.proto" (syntax proto3)
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
import { AvatarExpeditionState } from "./AvatarExpeditionState";
/**
 * @generated from protobuf message AvatarExpeditionInfo
 */
export interface AvatarExpeditionInfo {
    /**
     * @generated from protobuf field: AvatarExpeditionState state = 1;
     */
    state: AvatarExpeditionState;
    /**
     * @generated from protobuf field: uint32 exp_id = 2;
     */
    expId: number;
    /**
     * @generated from protobuf field: uint32 hour_time = 3;
     */
    hourTime: number;
    /**
     * @generated from protobuf field: uint32 start_time = 4;
     */
    startTime: number;
    /**
     * @generated from protobuf field: float shorten_ratio = 5;
     */
    shortenRatio: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionInfo$Type extends MessageType<AvatarExpeditionInfo> {
    constructor() {
        super("AvatarExpeditionInfo", [
            { no: 1, name: "state", kind: "enum", T: () => ["AvatarExpeditionState", AvatarExpeditionState, "AVATAR_EXPEDITION_STATE_"] },
            { no: 2, name: "exp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "hour_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "shorten_ratio", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarExpeditionInfo>): AvatarExpeditionInfo {
        const message = { state: 0, expId: 0, hourTime: 0, startTime: 0, shortenRatio: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarExpeditionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarExpeditionInfo): AvatarExpeditionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AvatarExpeditionState state */ 1:
                    message.state = reader.int32();
                    break;
                case /* uint32 exp_id */ 2:
                    message.expId = reader.uint32();
                    break;
                case /* uint32 hour_time */ 3:
                    message.hourTime = reader.uint32();
                    break;
                case /* uint32 start_time */ 4:
                    message.startTime = reader.uint32();
                    break;
                case /* float shorten_ratio */ 5:
                    message.shortenRatio = reader.float();
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
    internalBinaryWrite(message: AvatarExpeditionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AvatarExpeditionState state = 1; */
        if (message.state !== 0)
            writer.tag(1, WireType.Varint).int32(message.state);
        /* uint32 exp_id = 2; */
        if (message.expId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.expId);
        /* uint32 hour_time = 3; */
        if (message.hourTime !== 0)
            writer.tag(3, WireType.Varint).uint32(message.hourTime);
        /* uint32 start_time = 4; */
        if (message.startTime !== 0)
            writer.tag(4, WireType.Varint).uint32(message.startTime);
        /* float shorten_ratio = 5; */
        if (message.shortenRatio !== 0)
            writer.tag(5, WireType.Bit32).float(message.shortenRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarExpeditionInfo
 */
export const AvatarExpeditionInfo = new AvatarExpeditionInfo$Type();
