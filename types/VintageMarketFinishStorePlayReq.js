"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VintageMarketFinishStorePlayReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VintageMarketStoreOpInfo_1 = require("./VintageMarketStoreOpInfo");
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketFinishStorePlayReq$Type extends runtime_5.MessageType {
    constructor() {
        super("VintageMarketFinishStorePlayReq", [
            { no: 12, name: "store_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "store_op_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VintageMarketStoreOpInfo_1.VintageMarketStoreOpInfo }
        ]);
    }
    create(value) {
        const message = { storeRound: 0, storeOpList: [] };
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
                case /* uint32 store_round */ 12:
                    message.storeRound = reader.uint32();
                    break;
                case /* repeated VintageMarketStoreOpInfo store_op_list */ 11:
                    message.storeOpList.push(VintageMarketStoreOpInfo_1.VintageMarketStoreOpInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 store_round = 12; */
        if (message.storeRound !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.storeRound);
        /* repeated VintageMarketStoreOpInfo store_op_list = 11; */
        for (let i = 0; i < message.storeOpList.length; i++)
            VintageMarketStoreOpInfo_1.VintageMarketStoreOpInfo.internalBinaryWrite(message.storeOpList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketFinishStorePlayReq
 */
exports.VintageMarketFinishStorePlayReq = new VintageMarketFinishStorePlayReq$Type();
