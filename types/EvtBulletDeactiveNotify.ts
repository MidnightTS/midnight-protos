// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EvtBulletDeactiveNotify.proto" (syntax proto3)
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
import { ForwardType } from "./ForwardType";
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 399;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message EvtBulletDeactiveNotify
 */
export interface EvtBulletDeactiveNotify {
    /**
     * @generated from protobuf field: Vector disappear_pos = 12;
     */
    disappearPos?: Vector;
    /**
     * @generated from protobuf field: ForwardType forward_type = 11;
     */
    forwardType: ForwardType;
    /**
     * @generated from protobuf field: uint32 entity_id = 1;
     */
    entityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletDeactiveNotify$Type extends MessageType<EvtBulletDeactiveNotify> {
    constructor() {
        super("EvtBulletDeactiveNotify", [
            { no: 12, name: "disappear_pos", kind: "message", T: () => Vector },
            { no: 11, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType, "FORWARD_TYPE_"] },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<EvtBulletDeactiveNotify>): EvtBulletDeactiveNotify {
        const message = { forwardType: 0, entityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtBulletDeactiveNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtBulletDeactiveNotify): EvtBulletDeactiveNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector disappear_pos */ 12:
                    message.disappearPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.disappearPos);
                    break;
                case /* ForwardType forward_type */ 11:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
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
    internalBinaryWrite(message: EvtBulletDeactiveNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector disappear_pos = 12; */
        if (message.disappearPos)
            Vector.internalBinaryWrite(message.disappearPos, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* ForwardType forward_type = 11; */
        if (message.forwardType !== 0)
            writer.tag(11, WireType.Varint).int32(message.forwardType);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBulletDeactiveNotify
 */
export const EvtBulletDeactiveNotify = new EvtBulletDeactiveNotify$Type();