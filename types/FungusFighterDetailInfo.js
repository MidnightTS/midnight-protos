"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusFighterDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FungusTrainingDungeonDetail_1 = require("./FungusTrainingDungeonDetail");
const FungusPlotStageDetail_1 = require("./FungusPlotStageDetail");
const FungusTrainingProgressDetail_1 = require("./FungusTrainingProgressDetail");
const FungusDetail_1 = require("./FungusDetail");
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusFighterDetailInfo", [
            { no: 6, name: "fungus_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusDetail_1.FungusDetail },
            { no: 1, name: "Unk3300_GIHAKKAJHDH", kind: "scalar", jsonName: "Unk3300GIHAKKAJHDH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_KGKFJJHFHAB", kind: "scalar", jsonName: "Unk3300KGKFJJHFHAB", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "training_dungeon_progress_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingProgressDetail_1.FungusTrainingProgressDetail },
            { no: 9, name: "Unk3300_HPDOJOBPFMJ", kind: "scalar", jsonName: "Unk3300HPDOJOBPFMJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "plot_stage_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusPlotStageDetail_1.FungusPlotStageDetail },
            { no: 2, name: "training_dungeon_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingDungeonDetail_1.FungusTrainingDungeonDetail }
        ]);
    }
    create(value) {
        const message = { fungusDetailList: [], unk3300GIHAKKAJHDH: [], unk3300KGKFJJHFHAB: [], trainingDungeonProgressDetailList: [], unk3300HPDOJOBPFMJ: [], plotStageDetailList: [], trainingDungeonDetailList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated FungusDetail fungus_detail_list */ 6:
                    message.fungusDetailList.push(FungusDetail_1.FungusDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_GIHAKKAJHDH = 1 [json_name = "Unk3300GIHAKKAJHDH"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300GIHAKKAJHDH.push(reader.uint32());
                    else
                        message.unk3300GIHAKKAJHDH.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_KGKFJJHFHAB = 8 [json_name = "Unk3300KGKFJJHFHAB"];*/ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300KGKFJJHFHAB.push(reader.uint32());
                    else
                        message.unk3300KGKFJJHFHAB.push(reader.uint32());
                    break;
                case /* repeated FungusTrainingProgressDetail training_dungeon_progress_detail_list */ 3:
                    message.trainingDungeonProgressDetailList.push(FungusTrainingProgressDetail_1.FungusTrainingProgressDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_HPDOJOBPFMJ = 9 [json_name = "Unk3300HPDOJOBPFMJ"];*/ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HPDOJOBPFMJ.push(reader.uint32());
                    else
                        message.unk3300HPDOJOBPFMJ.push(reader.uint32());
                    break;
                case /* repeated FungusPlotStageDetail plot_stage_detail_list */ 11:
                    message.plotStageDetailList.push(FungusPlotStageDetail_1.FungusPlotStageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated FungusTrainingDungeonDetail training_dungeon_detail_list */ 2:
                    message.trainingDungeonDetailList.push(FungusTrainingDungeonDetail_1.FungusTrainingDungeonDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated FungusDetail fungus_detail_list = 6; */
        for (let i = 0; i < message.fungusDetailList.length; i++)
            FungusDetail_1.FungusDetail.internalBinaryWrite(message.fungusDetailList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_GIHAKKAJHDH = 1 [json_name = "Unk3300GIHAKKAJHDH"]; */
        if (message.unk3300GIHAKKAJHDH.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300GIHAKKAJHDH.length; i++)
                writer.uint32(message.unk3300GIHAKKAJHDH[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_KGKFJJHFHAB = 8 [json_name = "Unk3300KGKFJJHFHAB"]; */
        if (message.unk3300KGKFJJHFHAB.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300KGKFJJHFHAB.length; i++)
                writer.uint32(message.unk3300KGKFJJHFHAB[i]);
            writer.join();
        }
        /* repeated FungusTrainingProgressDetail training_dungeon_progress_detail_list = 3; */
        for (let i = 0; i < message.trainingDungeonProgressDetailList.length; i++)
            FungusTrainingProgressDetail_1.FungusTrainingProgressDetail.internalBinaryWrite(message.trainingDungeonProgressDetailList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_HPDOJOBPFMJ = 9 [json_name = "Unk3300HPDOJOBPFMJ"]; */
        if (message.unk3300HPDOJOBPFMJ.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HPDOJOBPFMJ.length; i++)
                writer.uint32(message.unk3300HPDOJOBPFMJ[i]);
            writer.join();
        }
        /* repeated FungusPlotStageDetail plot_stage_detail_list = 11; */
        for (let i = 0; i < message.plotStageDetailList.length; i++)
            FungusPlotStageDetail_1.FungusPlotStageDetail.internalBinaryWrite(message.plotStageDetailList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated FungusTrainingDungeonDetail training_dungeon_detail_list = 2; */
        for (let i = 0; i < message.trainingDungeonDetailList.length; i++)
            FungusTrainingDungeonDetail_1.FungusTrainingDungeonDetail.internalBinaryWrite(message.trainingDungeonDetailList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterDetailInfo
 */
exports.FungusFighterDetailInfo = new FungusFighterDetailInfo$Type();
