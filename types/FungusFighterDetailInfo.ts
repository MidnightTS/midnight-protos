// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "FungusFighterDetailInfo.proto" (syntax proto3)
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
import { FungusTrainingDungeonDetail } from "./FungusTrainingDungeonDetail";
import { FungusPlotStageDetail } from "./FungusPlotStageDetail";
import { FungusTrainingProgressDetail } from "./FungusTrainingProgressDetail";
import { FungusDetail } from "./FungusDetail";
/**
 * @generated from protobuf message FungusFighterDetailInfo
 */
export interface FungusFighterDetailInfo {
    /**
     * @generated from protobuf field: repeated FungusDetail fungus_detail_list = 6;
     */
    fungusDetailList: FungusDetail[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_GIHAKKAJHDH = 1 [json_name = "Unk3300GIHAKKAJHDH"];
     */
    unk3300GIHAKKAJHDH: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_KGKFJJHFHAB = 8 [json_name = "Unk3300KGKFJJHFHAB"];
     */
    unk3300KGKFJJHFHAB: number[];
    /**
     * @generated from protobuf field: repeated FungusTrainingProgressDetail training_dungeon_progress_detail_list = 3;
     */
    trainingDungeonProgressDetailList: FungusTrainingProgressDetail[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_HPDOJOBPFMJ = 9 [json_name = "Unk3300HPDOJOBPFMJ"];
     */
    unk3300HPDOJOBPFMJ: number[];
    /**
     * @generated from protobuf field: repeated FungusPlotStageDetail plot_stage_detail_list = 11;
     */
    plotStageDetailList: FungusPlotStageDetail[];
    /**
     * @generated from protobuf field: repeated FungusTrainingDungeonDetail training_dungeon_detail_list = 2;
     */
    trainingDungeonDetailList: FungusTrainingDungeonDetail[];
}
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterDetailInfo$Type extends MessageType<FungusFighterDetailInfo> {
    constructor() {
        super("FungusFighterDetailInfo", [
            { no: 6, name: "fungus_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusDetail },
            { no: 1, name: "Unk3300_GIHAKKAJHDH", kind: "scalar", jsonName: "Unk3300GIHAKKAJHDH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KGKFJJHFHAB", kind: "scalar", jsonName: "Unk3300KGKFJJHFHAB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "training_dungeon_progress_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingProgressDetail },
            { no: 9, name: "Unk3300_HPDOJOBPFMJ", kind: "scalar", jsonName: "Unk3300HPDOJOBPFMJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "plot_stage_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusPlotStageDetail },
            { no: 2, name: "training_dungeon_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingDungeonDetail }
        ]);
    }
    create(value?: PartialMessage<FungusFighterDetailInfo>): FungusFighterDetailInfo {
        const message = { fungusDetailList: [], unk3300GIHAKKAJHDH: [], unk3300KGKFJJHFHAB: [], trainingDungeonProgressDetailList: [], unk3300HPDOJOBPFMJ: [], plotStageDetailList: [], trainingDungeonDetailList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FungusFighterDetailInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FungusFighterDetailInfo): FungusFighterDetailInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated FungusDetail fungus_detail_list */ 6:
                    message.fungusDetailList.push(FungusDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_GIHAKKAJHDH = 1 [json_name = "Unk3300GIHAKKAJHDH"];*/ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300GIHAKKAJHDH.push(reader.uint32());
                    else
                        message.unk3300GIHAKKAJHDH.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_KGKFJJHFHAB = 8 [json_name = "Unk3300KGKFJJHFHAB"];*/ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300KGKFJJHFHAB.push(reader.uint32());
                    else
                        message.unk3300KGKFJJHFHAB.push(reader.uint32());
                    break;
                case /* repeated FungusTrainingProgressDetail training_dungeon_progress_detail_list */ 3:
                    message.trainingDungeonProgressDetailList.push(FungusTrainingProgressDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_HPDOJOBPFMJ = 9 [json_name = "Unk3300HPDOJOBPFMJ"];*/ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HPDOJOBPFMJ.push(reader.uint32());
                    else
                        message.unk3300HPDOJOBPFMJ.push(reader.uint32());
                    break;
                case /* repeated FungusPlotStageDetail plot_stage_detail_list */ 11:
                    message.plotStageDetailList.push(FungusPlotStageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated FungusTrainingDungeonDetail training_dungeon_detail_list */ 2:
                    message.trainingDungeonDetailList.push(FungusTrainingDungeonDetail.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: FungusFighterDetailInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated FungusDetail fungus_detail_list = 6; */
        for (let i = 0; i < message.fungusDetailList.length; i++)
            FungusDetail.internalBinaryWrite(message.fungusDetailList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_GIHAKKAJHDH = 1 [json_name = "Unk3300GIHAKKAJHDH"]; */
        if (message.unk3300GIHAKKAJHDH.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300GIHAKKAJHDH.length; i++)
                writer.uint32(message.unk3300GIHAKKAJHDH[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_KGKFJJHFHAB = 8 [json_name = "Unk3300KGKFJJHFHAB"]; */
        if (message.unk3300KGKFJJHFHAB.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300KGKFJJHFHAB.length; i++)
                writer.uint32(message.unk3300KGKFJJHFHAB[i]);
            writer.join();
        }
        /* repeated FungusTrainingProgressDetail training_dungeon_progress_detail_list = 3; */
        for (let i = 0; i < message.trainingDungeonProgressDetailList.length; i++)
            FungusTrainingProgressDetail.internalBinaryWrite(message.trainingDungeonProgressDetailList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_HPDOJOBPFMJ = 9 [json_name = "Unk3300HPDOJOBPFMJ"]; */
        if (message.unk3300HPDOJOBPFMJ.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HPDOJOBPFMJ.length; i++)
                writer.uint32(message.unk3300HPDOJOBPFMJ[i]);
            writer.join();
        }
        /* repeated FungusPlotStageDetail plot_stage_detail_list = 11; */
        for (let i = 0; i < message.plotStageDetailList.length; i++)
            FungusPlotStageDetail.internalBinaryWrite(message.plotStageDetailList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated FungusTrainingDungeonDetail training_dungeon_detail_list = 2; */
        for (let i = 0; i < message.trainingDungeonDetailList.length; i++)
            FungusTrainingDungeonDetail.internalBinaryWrite(message.trainingDungeonDetailList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterDetailInfo
 */
export const FungusFighterDetailInfo = new FungusFighterDetailInfo$Type();
