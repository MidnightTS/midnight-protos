"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FungusFighterTrainingSelectFungusReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FungusFighterTrainingSelectFungusReq$Type extends runtime_5.MessageType {
    constructor() {
        super("FungusFighterTrainingSelectFungusReq", [
            { no: 3, name: "backup_fungus_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "fight_fungus_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { backupFungusIdList: [], fightFungusIdList: [] };
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
                case /* repeated uint32 backup_fungus_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backupFungusIdList.push(reader.uint32());
                    else
                        message.backupFungusIdList.push(reader.uint32());
                    break;
                case /* repeated uint32 fight_fungus_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fightFungusIdList.push(reader.uint32());
                    else
                        message.fightFungusIdList.push(reader.uint32());
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
        /* repeated uint32 backup_fungus_id_list = 3; */
        if (message.backupFungusIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backupFungusIdList.length; i++)
                writer.uint32(message.backupFungusIdList[i]);
            writer.join();
        }
        /* repeated uint32 fight_fungus_id_list = 9; */
        if (message.fightFungusIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fightFungusIdList.length; i++)
                writer.uint32(message.fightFungusIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FungusFighterTrainingSelectFungusReq
 */
exports.FungusFighterTrainingSelectFungusReq = new FungusFighterTrainingSelectFungusReq$Type();
