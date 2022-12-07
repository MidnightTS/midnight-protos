// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomePreviewBlueprintRsp.proto" (syntax proto3)
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
import { HomeSceneArrangementInfo } from "./HomeSceneArrangementInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4462;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message HomePreviewBlueprintRsp
 */
export interface HomePreviewBlueprintRsp {
    /**
     * @generated from protobuf field: int32 retcode = 13;
     */
    retcode: number;
    /**
     * @generated from protobuf field: HomeSceneArrangementInfo scene_arrangement_info = 5;
     */
    sceneArrangementInfo?: HomeSceneArrangementInfo;
    /**
     * @generated from protobuf field: string share_code = 9;
     */
    shareCode: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomePreviewBlueprintRsp$Type extends MessageType<HomePreviewBlueprintRsp> {
    constructor() {
        super("HomePreviewBlueprintRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "scene_arrangement_info", kind: "message", T: () => HomeSceneArrangementInfo },
            { no: 9, name: "share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<HomePreviewBlueprintRsp>): HomePreviewBlueprintRsp {
        const message = { retcode: 0, shareCode: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomePreviewBlueprintRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomePreviewBlueprintRsp): HomePreviewBlueprintRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* HomeSceneArrangementInfo scene_arrangement_info */ 5:
                    message.sceneArrangementInfo = HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* string share_code */ 9:
                    message.shareCode = reader.string();
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
    internalBinaryWrite(message: HomePreviewBlueprintRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, WireType.Varint).int32(message.retcode);
        /* HomeSceneArrangementInfo scene_arrangement_info = 5; */
        if (message.sceneArrangementInfo)
            HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* string share_code = 9; */
        if (message.shareCode !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.shareCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePreviewBlueprintRsp
 */
export const HomePreviewBlueprintRsp = new HomePreviewBlueprintRsp$Type();