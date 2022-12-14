// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MoonfinTrialActivityDetailInfo.proto" (syntax proto3)
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
import { MoonfinTrialLevelInfo } from "./MoonfinTrialLevelInfo";
/**
 * @generated from protobuf message MoonfinTrialActivityDetailInfo
 */
export interface MoonfinTrialActivityDetailInfo {
    /**
     * @generated from protobuf field: uint32 special_fish_count = 13;
     */
    specialFishCount: number;
    /**
     * @generated from protobuf field: map<uint32, MoonfinTrialLevelInfo> level_info_map = 5;
     */
    levelInfoMap: {
        [key: number]: MoonfinTrialLevelInfo;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class MoonfinTrialActivityDetailInfo$Type extends MessageType<MoonfinTrialActivityDetailInfo> {
    constructor() {
        super("MoonfinTrialActivityDetailInfo", [
            { no: 13, name: "special_fish_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => MoonfinTrialLevelInfo } }
        ]);
    }
    create(value?: PartialMessage<MoonfinTrialActivityDetailInfo>): MoonfinTrialActivityDetailInfo {
        const message = { specialFishCount: 0, levelInfoMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MoonfinTrialActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MoonfinTrialActivityDetailInfo): MoonfinTrialActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 special_fish_count */ 13:
                    message.specialFishCount = reader.uint32();
                    break;
                case /* map<uint32, MoonfinTrialLevelInfo> level_info_map */ 5:
                    this.binaryReadMap5(message.levelInfoMap, reader, options);
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
    private binaryReadMap5(map: MoonfinTrialActivityDetailInfo["levelInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MoonfinTrialActivityDetailInfo["levelInfoMap"] | undefined, val: MoonfinTrialActivityDetailInfo["levelInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = MoonfinTrialLevelInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MoonfinTrialActivityDetailInfo.level_info_map");
            }
        }
        map[key ?? 0] = val ?? MoonfinTrialLevelInfo.create();
    }
    internalBinaryWrite(message: MoonfinTrialActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 special_fish_count = 13; */
        if (message.specialFishCount !== 0)
            writer.tag(13, WireType.Varint).uint32(message.specialFishCount);
        /* map<uint32, MoonfinTrialLevelInfo> level_info_map = 5; */
        for (let k of Object.keys(message.levelInfoMap)) {
            writer.tag(5, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            MoonfinTrialLevelInfo.internalBinaryWrite(message.levelInfoMap[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MoonfinTrialActivityDetailInfo
 */
export const MoonfinTrialActivityDetailInfo = new MoonfinTrialActivityDetailInfo$Type();
