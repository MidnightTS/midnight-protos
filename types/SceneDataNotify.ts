// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneDataNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 3368;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message SceneDataNotify
 */
export interface SceneDataNotify {
    /**
     * @generated from protobuf field: repeated uint32 scene_tag_id_list = 3;
     */
    sceneTagIdList: number[];
    /**
     * @generated from protobuf field: repeated string level_config_name_list = 6;
     */
    levelConfigNameList: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneDataNotify$Type extends MessageType<SceneDataNotify> {
    constructor() {
        super("SceneDataNotify", [
            { no: 3, name: "scene_tag_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "level_config_name_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SceneDataNotify>): SceneDataNotify {
        const message = { sceneTagIdList: [], levelConfigNameList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneDataNotify): SceneDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 scene_tag_id_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.sceneTagIdList.push(reader.uint32());
                    else
                        message.sceneTagIdList.push(reader.uint32());
                    break;
                case /* repeated string level_config_name_list */ 6:
                    message.levelConfigNameList.push(reader.string());
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
    internalBinaryWrite(message: SceneDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 scene_tag_id_list = 3; */
        if (message.sceneTagIdList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.sceneTagIdList.length; i++)
                writer.uint32(message.sceneTagIdList[i]);
            writer.join();
        }
        /* repeated string level_config_name_list = 6; */
        for (let i = 0; i < message.levelConfigNameList.length; i++)
            writer.tag(6, WireType.LengthDelimited).string(message.levelConfigNameList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneDataNotify
 */
export const SceneDataNotify = new SceneDataNotify$Type();
