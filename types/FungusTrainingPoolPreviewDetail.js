"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusTrainingPoolPreviewDetail = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FungusTrainingMonsterPreviewDetail_1 = require("./FungusTrainingMonsterPreviewDetail");
// @generated message type with reflection information, may provide speed optimized methods
class FungusTrainingPoolPreviewDetail$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusTrainingPoolPreviewDetail", [
            { no: 10, name: "monster_preview_detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FungusTrainingMonsterPreviewDetail_1.FungusTrainingMonsterPreviewDetail },
            { no: 8, name: "pool_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterPreviewDetailList: [], poolId: 0 };
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
                case /* repeated FungusTrainingMonsterPreviewDetail monster_preview_detail_list */ 10:
                    message.monsterPreviewDetailList.push(FungusTrainingMonsterPreviewDetail_1.FungusTrainingMonsterPreviewDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 pool_id */ 8:
                    message.poolId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated FungusTrainingMonsterPreviewDetail monster_preview_detail_list = 10; */
        for (let i = 0; i < message.monsterPreviewDetailList.length; i++)
            FungusTrainingMonsterPreviewDetail_1.FungusTrainingMonsterPreviewDetail.internalBinaryWrite(message.monsterPreviewDetailList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 pool_id = 8; */
        if (message.poolId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.poolId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusTrainingPoolPreviewDetail
 */
exports.FungusTrainingPoolPreviewDetail = new FungusTrainingPoolPreviewDetail$Type();
