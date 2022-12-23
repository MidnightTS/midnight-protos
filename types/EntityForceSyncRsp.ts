// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EntityForceSyncRsp.proto" (syntax proto3)
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
import { MotionInfo } from "./MotionInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 295;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message EntityForceSyncRsp
 */
export interface EntityForceSyncRsp {
    /**
     * @generated from protobuf field: uint32 entity_id = 12;
     */
    entityId: number;
    /**
     * @generated from protobuf field: uint32 scene_time = 2;
     */
    sceneTime: number;
    /**
     * @generated from protobuf field: MotionInfo fail_motion = 11;
     */
    failMotion?: MotionInfo;
    /**
     * @generated from protobuf field: int32 retcode = 8;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EntityForceSyncRsp$Type extends MessageType<EntityForceSyncRsp> {
    constructor() {
        super("EntityForceSyncRsp", [
            { no: 12, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fail_motion", kind: "message", T: () => MotionInfo },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<EntityForceSyncRsp>): EntityForceSyncRsp {
        const message = { entityId: 0, sceneTime: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EntityForceSyncRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EntityForceSyncRsp): EntityForceSyncRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 entity_id */ 12:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 scene_time */ 2:
                    message.sceneTime = reader.uint32();
                    break;
                case /* MotionInfo fail_motion */ 11:
                    message.failMotion = MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.failMotion);
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
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
    internalBinaryWrite(message: EntityForceSyncRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 entity_id = 12; */
        if (message.entityId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.entityId);
        /* uint32 scene_time = 2; */
        if (message.sceneTime !== 0)
            writer.tag(2, WireType.Varint).uint32(message.sceneTime);
        /* MotionInfo fail_motion = 11; */
        if (message.failMotion)
            MotionInfo.internalBinaryWrite(message.failMotion, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityForceSyncRsp
 */
export const EntityForceSyncRsp = new EntityForceSyncRsp$Type();
