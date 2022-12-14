// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGSkillPreviewNotify.proto" (syntax proto3)
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
import { GCGSkillPreviewPlayCardInfo } from "./GCGSkillPreviewPlayCardInfo";
import { GCGChangeOnstageInfo } from "./GCGChangeOnstageInfo";
import { GCGSkillPreviewInfo } from "./GCGSkillPreviewInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 7659;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGSkillPreviewNotify
 */
export interface GCGSkillPreviewNotify {
    /**
     * @generated from protobuf field: uint32 controller_id = 13;
     */
    controllerId: number;
    /**
     * @generated from protobuf field: repeated GCGSkillPreviewInfo skill_preview_list = 15;
     */
    skillPreviewList: GCGSkillPreviewInfo[];
    /**
     * @generated from protobuf field: repeated GCGChangeOnstageInfo change_onstage_preview_list = 3;
     */
    changeOnstagePreviewList: GCGChangeOnstageInfo[];
    /**
     * @generated from protobuf field: repeated GCGSkillPreviewPlayCardInfo play_card_list = 11;
     */
    playCardList: GCGSkillPreviewPlayCardInfo[];
    /**
     * @generated from protobuf field: uint32 onstage_card_guid = 6;
     */
    onstageCardGuid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewNotify$Type extends MessageType<GCGSkillPreviewNotify> {
    constructor() {
        super("GCGSkillPreviewNotify", [
            { no: 13, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "skill_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewInfo },
            { no: 3, name: "change_onstage_preview_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGChangeOnstageInfo },
            { no: 11, name: "play_card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillPreviewPlayCardInfo },
            { no: 6, name: "onstage_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGSkillPreviewNotify>): GCGSkillPreviewNotify {
        const message = { controllerId: 0, skillPreviewList: [], changeOnstagePreviewList: [], playCardList: [], onstageCardGuid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGSkillPreviewNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGSkillPreviewNotify): GCGSkillPreviewNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 controller_id */ 13:
                    message.controllerId = reader.uint32();
                    break;
                case /* repeated GCGSkillPreviewInfo skill_preview_list */ 15:
                    message.skillPreviewList.push(GCGSkillPreviewInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGChangeOnstageInfo change_onstage_preview_list */ 3:
                    message.changeOnstagePreviewList.push(GCGChangeOnstageInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGSkillPreviewPlayCardInfo play_card_list */ 11:
                    message.playCardList.push(GCGSkillPreviewPlayCardInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 onstage_card_guid */ 6:
                    message.onstageCardGuid = reader.uint32();
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
    internalBinaryWrite(message: GCGSkillPreviewNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 controller_id = 13; */
        if (message.controllerId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.controllerId);
        /* repeated GCGSkillPreviewInfo skill_preview_list = 15; */
        for (let i = 0; i < message.skillPreviewList.length; i++)
            GCGSkillPreviewInfo.internalBinaryWrite(message.skillPreviewList[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGChangeOnstageInfo change_onstage_preview_list = 3; */
        for (let i = 0; i < message.changeOnstagePreviewList.length; i++)
            GCGChangeOnstageInfo.internalBinaryWrite(message.changeOnstagePreviewList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGSkillPreviewPlayCardInfo play_card_list = 11; */
        for (let i = 0; i < message.playCardList.length; i++)
            GCGSkillPreviewPlayCardInfo.internalBinaryWrite(message.playCardList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint32 onstage_card_guid = 6; */
        if (message.onstageCardGuid !== 0)
            writer.tag(6, WireType.Varint).uint32(message.onstageCardGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewNotify
 */
export const GCGSkillPreviewNotify = new GCGSkillPreviewNotify$Type();
