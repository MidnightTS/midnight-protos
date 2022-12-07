// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HachiActivityDetailInfo.proto" (syntax proto3)
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
import { HachiStageInfo } from "./HachiStageInfo";
/**
 * @generated from protobuf message HachiActivityDetailInfo
 */
export interface HachiActivityDetailInfo {
    /**
     * @generated from protobuf field: map<uint32, HachiStageInfo> stage_map = 6;
     */
    stageMap: {
        [key: number]: HachiStageInfo;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class HachiActivityDetailInfo$Type extends MessageType<HachiActivityDetailInfo> {
    constructor() {
        super("HachiActivityDetailInfo", [
            { no: 6, name: "stage_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => HachiStageInfo } }
        ]);
    }
    create(value?: PartialMessage<HachiActivityDetailInfo>): HachiActivityDetailInfo {
        const message = { stageMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HachiActivityDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HachiActivityDetailInfo): HachiActivityDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, HachiStageInfo> stage_map */ 6:
                    this.binaryReadMap6(message.stageMap, reader, options);
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
    private binaryReadMap6(map: HachiActivityDetailInfo["stageMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof HachiActivityDetailInfo["stageMap"] | undefined, val: HachiActivityDetailInfo["stageMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = HachiStageInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field HachiActivityDetailInfo.stage_map");
            }
        }
        map[key ?? 0] = val ?? HachiStageInfo.create();
    }
    internalBinaryWrite(message: HachiActivityDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, HachiStageInfo> stage_map = 6; */
        for (let k of Object.keys(message.stageMap)) {
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            HachiStageInfo.internalBinaryWrite(message.stageMap[k as any], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HachiActivityDetailInfo
 */
export const HachiActivityDetailInfo = new HachiActivityDetailInfo$Type();