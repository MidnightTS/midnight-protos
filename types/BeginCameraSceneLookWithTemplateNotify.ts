// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BeginCameraSceneLookWithTemplateNotify.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 3342;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message BeginCameraSceneLookWithTemplateNotify
 */
export interface BeginCameraSceneLookWithTemplateNotify {
    /**
     * @generated from protobuf field: BeginCameraSceneLookWithTemplateNotify.FollowType follow_type = 5;
     */
    followType: BeginCameraSceneLookWithTemplateNotify_FollowType;
    /**
     * @generated from protobuf field: uint32 entity_id = 7;
     */
    entityId: number;
    /**
     * @generated from protobuf field: Vector Unk3300_FJDFGLNLMBN = 1 [json_name = "Unk3300FJDFGLNLMBN"];
     */
    unk3300FJDFGLNLMBN?: Vector;
    /**
     * @generated from protobuf field: uint32 template_id = 13;
     */
    templateId: number;
    /**
     * @generated from protobuf field: repeated string other_params = 12;
     */
    otherParams: string[];
    /**
     * @generated from protobuf field: Vector Unk3300_PPCIDICMIEN = 10 [json_name = "Unk3300PPCIDICMIEN"];
     */
    unk3300PPCIDICMIEN?: Vector;
}
/**
 * @generated from protobuf enum BeginCameraSceneLookWithTemplateNotify.FollowType
 */
export enum BeginCameraSceneLookWithTemplateNotify_FollowType {
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_INIT_FOLLOW_POS = 0;
     */
    INIT_FOLLOW_POS = 0,
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_FOLLOW_POS = 1;
     */
    SET_FOLLOW_POS = 1,
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_ABS_FOLLOW_POS = 2;
     */
    SET_ABS_FOLLOW_POS = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class BeginCameraSceneLookWithTemplateNotify$Type extends MessageType<BeginCameraSceneLookWithTemplateNotify> {
    constructor() {
        super("BeginCameraSceneLookWithTemplateNotify", [
            { no: 5, name: "follow_type", kind: "enum", T: () => ["BeginCameraSceneLookWithTemplateNotify.FollowType", BeginCameraSceneLookWithTemplateNotify_FollowType, "FOLLOW_TYPE_"] },
            { no: 7, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_FJDFGLNLMBN", kind: "message", jsonName: "Unk3300FJDFGLNLMBN", T: () => Vector },
            { no: 13, name: "template_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "other_params", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "Unk3300_PPCIDICMIEN", kind: "message", jsonName: "Unk3300PPCIDICMIEN", T: () => Vector }
        ]);
    }
    create(value?: PartialMessage<BeginCameraSceneLookWithTemplateNotify>): BeginCameraSceneLookWithTemplateNotify {
        const message = { followType: 0, entityId: 0, templateId: 0, otherParams: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BeginCameraSceneLookWithTemplateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BeginCameraSceneLookWithTemplateNotify): BeginCameraSceneLookWithTemplateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BeginCameraSceneLookWithTemplateNotify.FollowType follow_type */ 5:
                    message.followType = reader.int32();
                    break;
                case /* uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector Unk3300_FJDFGLNLMBN = 1 [json_name = "Unk3300FJDFGLNLMBN"];*/ 1:
                    message.unk3300FJDFGLNLMBN = Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FJDFGLNLMBN);
                    break;
                case /* uint32 template_id */ 13:
                    message.templateId = reader.uint32();
                    break;
                case /* repeated string other_params */ 12:
                    message.otherParams.push(reader.string());
                    break;
                case /* Vector Unk3300_PPCIDICMIEN = 10 [json_name = "Unk3300PPCIDICMIEN"];*/ 10:
                    message.unk3300PPCIDICMIEN = Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300PPCIDICMIEN);
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
    internalBinaryWrite(message: BeginCameraSceneLookWithTemplateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* BeginCameraSceneLookWithTemplateNotify.FollowType follow_type = 5; */
        if (message.followType !== 0)
            writer.tag(5, WireType.Varint).int32(message.followType);
        /* uint32 entity_id = 7; */
        if (message.entityId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.entityId);
        /* Vector Unk3300_FJDFGLNLMBN = 1 [json_name = "Unk3300FJDFGLNLMBN"]; */
        if (message.unk3300FJDFGLNLMBN)
            Vector.internalBinaryWrite(message.unk3300FJDFGLNLMBN, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 template_id = 13; */
        if (message.templateId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.templateId);
        /* repeated string other_params = 12; */
        for (let i = 0; i < message.otherParams.length; i++)
            writer.tag(12, WireType.LengthDelimited).string(message.otherParams[i]);
        /* Vector Unk3300_PPCIDICMIEN = 10 [json_name = "Unk3300PPCIDICMIEN"]; */
        if (message.unk3300PPCIDICMIEN)
            Vector.internalBinaryWrite(message.unk3300PPCIDICMIEN, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BeginCameraSceneLookWithTemplateNotify
 */
export const BeginCameraSceneLookWithTemplateNotify = new BeginCameraSceneLookWithTemplateNotify$Type();
