// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeCreateBlueprintReq.proto" (syntax proto3)
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
 *   CMD_ID = 4539;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message HomeCreateBlueprintReq
 */
export interface HomeCreateBlueprintReq {
    /**
     * @generated from protobuf field: HomeSceneArrangementInfo scene_arrangement_info = 4;
     */
    sceneArrangementInfo?: HomeSceneArrangementInfo;
    /**
     * @generated from protobuf field: uint32 gen_share_code_count = 9;
     */
    genShareCodeCount: number;
    /**
     * @generated from protobuf field: string server_share_code = 5;
     */
    serverShareCode: string;
    /**
     * @generated from protobuf field: uint32 slot_id = 15;
     */
    slotId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeCreateBlueprintReq$Type extends MessageType<HomeCreateBlueprintReq> {
    constructor() {
        super("HomeCreateBlueprintReq", [
            { no: 4, name: "scene_arrangement_info", kind: "message", T: () => HomeSceneArrangementInfo },
            { no: 9, name: "gen_share_code_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "server_share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeCreateBlueprintReq>): HomeCreateBlueprintReq {
        const message = { genShareCodeCount: 0, serverShareCode: "", slotId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeCreateBlueprintReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeCreateBlueprintReq): HomeCreateBlueprintReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* HomeSceneArrangementInfo scene_arrangement_info */ 4:
                    message.sceneArrangementInfo = HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* uint32 gen_share_code_count */ 9:
                    message.genShareCodeCount = reader.uint32();
                    break;
                case /* string server_share_code */ 5:
                    message.serverShareCode = reader.string();
                    break;
                case /* uint32 slot_id */ 15:
                    message.slotId = reader.uint32();
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
    internalBinaryWrite(message: HomeCreateBlueprintReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* HomeSceneArrangementInfo scene_arrangement_info = 4; */
        if (message.sceneArrangementInfo)
            HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 gen_share_code_count = 9; */
        if (message.genShareCodeCount !== 0)
            writer.tag(9, WireType.Varint).uint32(message.genShareCodeCount);
        /* string server_share_code = 5; */
        if (message.serverShareCode !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.serverShareCode);
        /* uint32 slot_id = 15; */
        if (message.slotId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.slotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeCreateBlueprintReq
 */
export const HomeCreateBlueprintReq = new HomeCreateBlueprintReq$Type();